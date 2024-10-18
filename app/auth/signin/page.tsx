"use client";

// * React
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// * Icons
import { AtSign, Lock, Eye, EyeOff, X } from 'lucide-react';

// * Services & Models
import { ILoginData } from '@/models';
import { apiLogin } from '@/services/auth';

// *Components & UI
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { ThemeSwitch } from '@/components/themeSwitch';

// * Hooks & Utils
import * as Yup from 'yup';
import { useAuth } from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';


interface IFormValues {
  email: string;
  password: string;
}

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { resolvedTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const { mutateAsync } = useMutation<ILoginData, Error, IFormValues>({
    mutationFn: apiLogin,
  });

  const initialValues: IFormValues = { email: '', password: '' };

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeLoaded(true);
    }
  }, [resolvedTheme]);

  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
  });

  const handleSubmit = async (values: IFormValues) => {
    try {
      const response = await mutateAsync(values);
      login(response);
    } catch (error) {
      console.error(error);
      toast.error('Erro ao realizar login. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-[#0E0E10]">
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        {isThemeLoaded &&
          <Image
            src={resolvedTheme === 'dark' ? "/jobber-white-logo.svg" : "/jobber-logo.png"}
            alt="logo"
            width={250}
            height={88}
            priority
          />
        }

        <div className="max-w-[450px] md:min-w-[450px] flex flex-col items-center justify-center bg-white dark:bg-[#18171B] rounded-lg shadow-lg border border-gray-200 mt-4 p-8 dark:border-gray-700">
          <h3>Faça login para acessar o Jobber</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="gap-4 pt-4 flex flex-col w-full">
                <div className="block">
                  <div className="relative flex items-center border rounded-md border-gray-300 dark:border-gray-700 focus-within:ring-1 focus-within:ring-[#3F19FF] dark:bg-[#1F1E23]">
                    <AtSign className="h-4 w-4 mx-2" />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-md p-2 bg-transparent focus:bg-transparent focus:outline-none focus:ring-0 dark:bg-[#1F1E23]"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('email', e.target.value)}
                      value={values.email}
                    />
                    {values.email && (
                      <Button
                        size="icon"
                        type="button"
                        variant="iconButton"
                        onClick={() => setFieldValue('email', '')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <ErrorMessage name="email" component="p" className="text-pink-600 text-sm mt-1" />
                </div>

                <div className="block">
                  <div className="relative flex items-center border rounded-md border-gray-300 dark:border-gray-700 focus-within:ring-1 focus-within:ring-[#3F19FF] dark:bg-[#1F1E23]">
                    <Lock className="h-4 w-4 mx-2" />
                    <Field
                      name="password"
                      placeholder="Senha"
                      type={showPassword ? 'text' : 'password'}
                      className="w-full p-2 bg-transparent focus:outline-none dark:bg-[#1F1E23]"
                    />
                    <Button
                      size="icon"
                      type="button"
                      variant="iconButton"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <ErrorMessage name="password" component="p" className="text-pink-600 text-sm mt-1" />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-slate-900 text-[12px] dark:text-gray-400 underline">
                    <a href="/">Esqueceu sua senha?</a>
                  </span>

                  <Button type="submit" disabled={isSubmitting} variant='submit' className="w-[150px]" >
                    {isSubmitting ? 'Acessando...' : 'Acessar'}
                  </Button>
                </div>

                <div className='w-full h-[1px] bg-slate-200 mb-4 mt-2 dark:bg-gray-700' />

              </Form>
            )}
          </Formik>
          <Button variant="outline" className="w-full text-bold text-base h-[40px]">
            <Image src="/google.svg" alt="google" width={20} height={20} className='mr-2' />
            Acessar com o Google
          </Button>
          <span className='pt-2 text-[14px]'>* Somente colaboradores Avanti</span>
        </div>
        {isThemeLoaded &&
          <Image
            src={resolvedTheme === 'dark' ? "/avanti-white-logo.svg" : "/avanti.svg"}
            alt="logo"
            width={180}
            height={31}
            priority
          />
        }
      </div>
    </div>
  );
}