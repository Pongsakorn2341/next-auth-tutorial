'use client';

import { CardWrapper } from '@/components/auth/card-wrapper'
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { register } from '@/actions/register';
import { useState, useTransition } from 'react';



export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    }
  });


  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError(undefined);
    setSuccess(undefined)
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(prev => data?.error);
          setSuccess(prev => data?.success)
        });
    })
  }

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Already have an account?"
      backButtonHref='/auth/login'
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name="name"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='John Doe'
                      type="name"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='john.doe@example.com'
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='******'
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type='submit'
            className='w-full'
          >
            Create an account
          </Button>
        </form>

      </Form>
    </CardWrapper>
  )
}
