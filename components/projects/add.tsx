"use client";

// * Next
import { useRouter } from "next/navigation";

// * Components
import { Page } from "@/components/page";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Combobox } from "../ui/combobox";

// * Services
import { createProject, fetchAllCustomers } from "@/services";

// * Hooks
import { usePermission } from "@/hooks/usePermissions";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";

// * Utils
import toast from "react-hot-toast";
import { Save } from "lucide-react";
import { IIdAndName, IProjectData, IProjectPostData } from "@/models";

// * Form
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  customer: Yup.number().required("Selecione um cliente").nullable(),
  name: Yup.string().required("O nome do projeto é obrigatório"),
  is_active: Yup.boolean().required("O status é obrigatório"),
  estimated_time: Yup.string().required("O tempo estimado é obrigatório"),
  can_customer_view: Yup.boolean().required(
    "O status de cliente pode ver é obrigatório"
  ),
  can_customer_request: Yup.boolean().required(
    "O status de cliente pode solicitar é obrigatório"
  ),
});

export const AddProjects = () => {
  const { isCustomer } = useAuth();
  const { usersPermissions } = usePermission();
  const navigate = useRouter();

  const mutation = useMutation<IProjectData, Error, IProjectPostData>({
    mutationFn: (data: IProjectPostData) => createProject(data),
  });

  const handleCustomerChange = (
    selectedCustomer: IIdAndName | null,
    setFieldValue: (field: string, value: any) => void
  ) => {
    if (selectedCustomer) {
      console.log("Selected Customer ID:", selectedCustomer.id);
      setFieldValue("customer", selectedCustomer.id);
    } else {
      setFieldValue("customer", []);
    }
  };

  return (
    <Page
      title="Adicionar novo projeto:"
      breadcrumb={[
        ["Projetos", "/projects/"],
        ["Adicionar", "/projects/new"],
      ]}
      contentSize="auto"
    >
      <div className="p-4 flex flex-col gap-2">
        <Formik
          initialValues={{
            customer: 0,
            name: "",
            is_active: true,
            estimated_time: "",
            can_customer_view: false,
            can_customer_request: false,
          }}
          validationSchema={projectSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Submitting values:", values);
            mutation.mutate(values, {
              onSuccess: () => {
                resetForm();
                toast.success("Projeto adicionado com sucesso!");
              },
              onError: (error) => {
                console.error("Erro ao adicionar o projeto:", error);
                toast.error("Erro ao adicionar o projeto. Tente novamente.");
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
                  <Label>Cliente: *</Label>
                  <Combobox<IIdAndName>
                    queryFn={fetchAllCustomers}
                    queryKey="customers"
                    labelKey={"name"}
                    valueKey={"name"}
                    placeholder="Selecione o Cliente"
                    emptyText={""}
                    onChange={(value) =>
                      handleCustomerChange(value, setFieldValue)
                    }
                  />
                  <ErrorMessage
                    name="customer"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div>
                  <Label>Nome: *</Label>
                  <Field
                    as={Input}
                    name="name"
                    placeholder="Exemplo: Projeto..."
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm"
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
                      id="can_customer_view"
                      name="can_customer_view"
                      className="cursor-pointer"
                    />
                    <Label htmlFor="can_customer_view">
                      Cliente pode visualizar
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      id="can_customer_request"
                      name="can_customer_request"
                      className="cursor-pointer"
                    />
                    <Label htmlFor="can_customer_request">
                      Cliente pode solicitar
                    </Label>
                  </div>
                </div>
                <div>
                  <Field
                    as={Input}
                    name="estimated_time"
                    placeholder="Exemplo: 100"
                  />
                  <ErrorMessage
                    name="estimated_time"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    type="submit"
                    className="w-[300px] mt-4"
                    disabled={isSubmitting}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Salvando..." : "Salvar"}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};
