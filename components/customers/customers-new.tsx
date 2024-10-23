"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// * Components
import { Page } from "@/components/page";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// * Services
import { createCustomer } from "@/services";

// * Hooks
import { Save } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { ICustomerData, ICustomerPostData } from "@/models";
import toast from "react-hot-toast";

const customerSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório")
});

export const CustomersNew = () => {
    const mutation = useMutation<ICustomerData, Error, ICustomerPostData>({
      mutationFn: (data: ICustomerPostData) => createCustomer(data)
    });

  return (
    <Page
      title="Adicionar novo cliente:"
      breadcrumb={[["Clientes", "/customers/"], ["Adicionar", "/customers/new"]]}
      contentSize="max"
    >
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">Nome:</h2>

        <Formik
          initialValues={{ name: "" }}
          validationSchema={customerSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutation.mutate(values, {
              onSuccess: () => {
                resetForm();
                toast.success("Cliente adicionado com sucesso!");
              },
              onError: (error) => {
                console.error("Erro ao adicionar cliente:", error);
                toast.error("Erro ao adicionar cliente. Tente novamente.");
              },
              onSettled: () => {
                setSubmitting(false);
              },
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field as={Input} name="name" placeholder="Exemplo: Avanti" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />

              <Button
                type="submit"
                className="w-[300px] mt-4"
                disabled={isSubmitting}
              >
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? "Salvando..." : "Salvar"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};
