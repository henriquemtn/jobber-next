"use client";

import { Button } from '@/components/ui/button';
import { AtSign, Lock } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { apiLogin } from '@/services/auth';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { LoginData } from '@/models';

interface IFormValues {
  email: string;
  password: string;
}

export default function AuthPage() {
  const { login } = useAuth();
  const router = useRouter();

  const { mutateAsync } = useMutation<LoginData, Error, IFormValues>({
    mutationFn: apiLogin,
  });

  const initialValues: IFormValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
  });

  const handleSubmit = async (values: IFormValues) => {
    try {
      const response = await mutateAsync(values);
      login(response);
      toast.success('Login bem-sucedido!');
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao realizar login. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-2 items-center">
        <Image src="/jobber-logo.png" alt="logo" width={250} height={88} />

        <div className="max-w-[400px] md:min-w-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-lg border border-gray-200 mt-4 p-4">
          <h3>Faça login para acessar o Jobber</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="gap-2 pt-4 flex flex-col w-full">
                <div className="block">
                  <div className="border rounded-md border-gray-300 flex items-center">
                    <AtSign className="h-4 w-4 mx-2" />
                    <Field type="email" name="email" className="peer w-full p-2" placeholder="Email" />
                  </div>
                  <ErrorMessage name="email" component="p" className="text-pink-600 text-sm mt-1" />
                </div>

                <div className="block">
                  <div className="border rounded-md border-gray-300 flex items-center">
                    <Lock className="h-4 w-4 mx-2" />
                    <Field type="password" name="password" className="peer w-full p-2" placeholder="Senha" />
                  </div>
                  <ErrorMessage name="password" component="p" className="text-pink-600 text-sm mt-1" />
                </div>

                <span className="text-slate-900 text-[12px]">
                  <a href="/">Esqueci minha senha</a>
                </span>

                <Button type="submit" disabled={isSubmitting} variant='submit' >
                  {isSubmitting ? 'Acessando...' : 'Acessar'}
                </Button>

                <div className='w-full h-[1px] bg-slate-200 mb-4 mt-2'/>

              </Form>
            )}
          </Formik>
          <Button variant="outline" className="w-full text-bold text-base h-[40px]">
              <Image src="/google.svg" alt="google" width={20} height={20} className='mr-2' />
              Acessar com Google  
          </Button>
          <span className='pt-2 text-[14px]'>* Somente colaboradores Avanti</span>
        </div>
        <Image src="/avanti.svg" alt="logo" width={180} height={31} />
      </div>
    </div>
  );
}