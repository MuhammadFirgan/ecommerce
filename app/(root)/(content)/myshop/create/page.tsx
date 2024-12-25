'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { createShop } from "@/lib/actions/shop.action"
import { useRouter } from "next/navigation"
 
const formSchema = z.object({
  ownerId: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
})


export default function page() {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    try {
      const myShop = await createShop({...values})
      if(myShop) {
        form.reset()
        router.push('/')
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shop Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your shop name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
