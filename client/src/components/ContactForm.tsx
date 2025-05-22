import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  botField: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      botField: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Don't submit if the bot field is filled
    if (data.botField) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real Netlify site, this would automatically work
      // due to the data-netlify="true" attribute on the form
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...data
        }).toString()
      });

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'We\'ll get back to you as soon as possible.',
          variant: 'default'
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto lg:mx-0"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: 
            <input 
              name="bot-field" 
              {...form.register('botField')}
            />
          </label>
        </p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" type="email" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" type="tel" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="h-32 text-base p-4"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white w-full md:w-auto py-6 text-lg font-medium rounded-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
