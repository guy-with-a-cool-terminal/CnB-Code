import { useForm } from "react-hook-form";
import { MessageSquare, Send, Mail, Phone, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "../hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simple validation
    if (!data.name.trim() || data.name.trim().length < 2) {
      toast({
        title: "Name is required",
        description: "Please enter at least 2 characters for your name.",
        variant: "destructive",
      });
      return;
    }

    if (!data.email.trim() || !data.email.includes('@')) {
      toast({
        title: "Valid email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      toast({
        title: "Message too short",
        description: "Please enter at least 10 characters for your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name.trim(),
          from_email: data.email.trim(),
          phone: data.phone?.trim() || 'Not provided',
          message: data.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setTimeout(() => {
        reset();
        setShowSuccess(false);
      }, 2000);

    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try WhatsApp or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "254114399034";
    const message = "Hi, I'm interested in discussing a software project";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes checkmark {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes particle {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        @keyframes successGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          50% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2); }
        }
      `}</style>

      <section id="contact" className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-800">
        {/* Subtle background effects - lighter at top, darker at bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-0 w-[500px] h-[500px] bg-slate-900/30 blur-[120px] rounded-full"></div>

        <div className="container-content relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Free consultation • No obligation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Get a Quote
              </h2>
              <p className="text-lg md:text-xl text-slate-700">
                Tell us what you need. We'll give you a clear price and timeline within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-slate-900">Your Project Details</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400"
                      disabled={isSubmitting || showSuccess}
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400"
                      disabled={isSubmitting || showSuccess}
                      maxLength={150}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      WhatsApp/Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400"
                      disabled={isSubmitting || showSuccess}
                      placeholder="+254..."
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400 resize-none"
                      placeholder="Brief description of your project and requirements"
                      disabled={isSubmitting || showSuccess}
                      maxLength={1000}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || showSuccess}
                    className="relative w-full px-6 py-3 rounded-md font-medium transition-all duration-300 overflow-hidden disabled:cursor-not-allowed disabled:opacity-50 btn-primary group"
                    style={{
                      backgroundColor: showSuccess ? '#22c55e' : '',
                      color: showSuccess ? 'white' : '',
                    }}
                  >
                    {showSuccess && (
                      <>
                        <span
                          className="absolute inset-0 bg-green-400 rounded-md"
                          style={{ animation: 'ripple 0.8s ease-out', transformOrigin: 'center' }}
                        />
                        {[0, 1, 2, 3, 4].map((i) => {
                          const angle = (i * 72) * Math.PI / 180;
                          const distance = 60;
                          return (
                            <span
                              key={i}
                              className="absolute"
                              style={{
                                left: '50%',
                                top: '50%',
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#22c55e',
                                borderRadius: '50%',
                                animation: 'particle 0.8s ease-out forwards',
                                '--tx': `${Math.cos(angle) * distance}px`,
                                '--ty': `${Math.sin(angle) * distance}px`,
                              } as any}
                            />
                          );
                        })}
                      </>
                    )}

                    <span className="relative flex items-center justify-center gap-2">
                      {showSuccess ? (
                        <>
                          <Check className="h-5 w-5" style={{ animation: 'checkmark 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
                          <span>Sent!</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                    <h3 className="text-xl font-semibold text-slate-900">WhatsApp Us</h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Prefer to chat? Message us on WhatsApp.
                  </p>
                  <button onClick={handleWhatsApp} className="w-full px-6 py-3 rounded-lg font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 transition-all group flex items-center justify-center">
                    <MessageSquare className="inline-block mr-2 h-4 w-4" />
                    WhatsApp Us
                  </button>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Response time</h3>
                  </div>
                  <div className="space-y-4 text-slate-600">
                    <div className="flex justify-between items-center">
                      <span>Email replies:</span>
                      <span className="font-medium text-slate-900">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>WhatsApp messages:</span>
                      <span className="font-medium text-slate-900">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Initial consultation:</span>
                      <span className="font-medium text-slate-900">Always free</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-slate-600">
                    We'll discuss your needs and tell you honestly if we're a good fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};