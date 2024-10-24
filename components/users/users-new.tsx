"use client";

// * Next
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// * Components
import { Page } from "@/components/page";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

// * Services
import { createUser, fetchAllCustomers, fetchAllGroups } from "@/services";

// * Hooks
import { usePermission } from "@/hooks/usePermissions";
import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";

// * Utils
import toast from "react-hot-toast";
import { Save } from "lucide-react";
import { IIdAndName, IUserData, IUserPostData } from "@/models";

// * Form
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MultiSelect } from "../ui/multi-select";

const userSchema = Yup.object().shape({
  first_name: Yup.string().required("O primeiro nome é obrigatório"),
  last_name: Yup.string().required("O sobrenome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  is_active: Yup.boolean().required("O status é obrigatório"),
  is_staff: Yup.boolean().required("O status de staff é obrigatório"),
  customer: Yup.array().of(Yup.number()),
  groups: Yup.array().of(Yup.number()),
});

export const UsersNew = () => {
  const { isCustomer } = useAuth();
  const { usersPermissions } = usePermission();
  const navigate = useRouter();

  useEffect(() => {
    if (isCustomer || !usersPermissions) navigate.push('/');
  }, [isCustomer, usersPermissions, navigate]);

  const mutation = useMutation<IUserData, Error, IUserPostData>({
    mutationFn: (data: IUserPostData) => createUser(data)
  });

  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchAllCustomers 
  });

  const { data: groups } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchAllGroups 
  });

  const customersOptions = customers
    ? customers.map(customer => ({
        value: customer.id.toString(),
        label: customer.name
      }))
    : [];

  const groupsOptions = groups
    ? groups.map(group => ({
        value: group.id.toString(),
        label: group.name
      }))
    : [];

    const handleCustomerChange = (selectedCustomers: number[], setFieldValue: (field: string, value: any) => void) => {
      console.log("Selected Customers:", selectedCustomers);
      setFieldValue("customer",  selectedCustomers); // Atualiza o campo "customer" com os IDs
    };
    

  const handleGroupChange = (selectedGroups: any, setFieldValue: (field: string, value: any) => void) => {
    console.log("Selected Groups:", selectedGroups);
    setFieldValue("groups", selectedGroups);
  };

  return (
    <Page
      title="Adicionar novo usuário:"
      breadcrumb={[["Usuários", "/users/"], ["Adicionar", "/users/new"]]}
      contentSize="max"
    >
      <div className="p-4 flex flex-col gap-2">
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
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="flex flex-col gap-4">
                <div>
                  <Label>Primeiro nome: *</Label>
                  <Field as={Input} name="first_name" placeholder="Primeiro Nome" />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Label>Último nome: *</Label>
                  <Field as={Input} name="last_name" placeholder="Sobrenome" />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Label>E-mail: *</Label>
                  <Field as={Input} name="email" type="email" placeholder="E-mail" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Label>Cliente:</Label>
                  <MultiSelect 
                    options={customersOptions}          
                    onValueChange={(selectedCustomers) => handleCustomerChange(selectedCustomers.map(Number), setFieldValue)} // Pass setFieldValue here
                  />
                </div>
                <div>
                  <Label>Grupo:</Label>
                  <MultiSelect 
                    options={groupsOptions}         
                    onValueChange={(selectedGroups) => handleGroupChange(selectedGroups.map(Number), setFieldValue)} // Pass setFieldValue here
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      id="is_active"
                      name="is_active"
                      className="cursor-pointer"
                    />
                    <Label htmlFor="is_active">É Ativo?</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      id="is_staff"
                      name="is_staff"
                      className="cursor-pointer"
                    />
                    <Label htmlFor="is_staff">É um Administrador?</Label>
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};
