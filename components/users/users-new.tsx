"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// * Components
import { Page } from "@/components/page";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// * Services
import { createUser } from "@/services";

// * Hooks
import { Save } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { IUserData, IUserPostData } from "@/models";
import toast from "react-hot-toast";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { ComboboxCustomers } from "../customers/customers-select";

const userSchema = Yup.object().shape({
  first_name: Yup.string().required("O primeiro nome é obrigatório"),
  last_name: Yup.string().required("O sobrenome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  is_active: Yup.boolean().required("O status é obrigatório"),
  is_staff: Yup.boolean().required("O status de staff é obrigatório"),
  customer: Yup.array().of(Yup.number()).required("Clientes são obrigatórios"),
  groups: Yup.array().of(Yup.number()).required("Grupos são obrigatórios")
});

export const UsersNew = () => {
  const mutation = useMutation<IUserData, Error, IUserPostData>({
    mutationFn: (data: IUserPostData) => createUser(data)
  });

  return (
    <Page
      title="Adicionar novo usuário:"
      breadcrumb={[["Usuários", "/users/"], ["Adicionar", "/users/new"]]}
      contentSize="max"
    >
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">Adicionar novo usuário:</h2>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            is_active: true,
            is_staff: false,
            customer: [],
            groups: []
          }}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutation.mutate(values, {
              onSuccess: () => {
                resetForm();
                toast.success("Usuário adicionado com sucesso!");
              },
              onError: (error) => {
                console.error("Erro ao adicionar usuário:", error);
                toast.error("Erro ao adicionar usuário. Tente novamente.");
              },
              onSettled: () => {
                setSubmitting(false);
              },
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field as={Input} name="first_name" placeholder="Primeiro Nome" />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Field as={Input} name="last_name" placeholder="Sobrenome" />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Field as={Input} name="email" type="email" placeholder="E-mail" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <ComboboxCustomers />
                </div>
                <div>
                  <Field as={Input} name="groups" placeholder="ID dos Grupos" />
                  <ErrorMessage
                    name="groups"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div className="flex gap-2">
                <div className="flex items-center space-x-2">
                    <Switch id="is_active" name="is_active" />
                    <Label htmlFor="airplane-mode">É Ativo?</Label>
                  </div>
                <div className="flex items-center space-x-2">
                    <Switch id="is_staff" name="is_staff" />
                    <Label htmlFor="airplane-mode">É um Administrador?</Label>
                  </div>
                </div>
              </div>
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
