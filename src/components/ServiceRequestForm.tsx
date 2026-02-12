import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { Sparkles, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  budget: string;
  timeline: string;
};

export function ServiceRequestForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Form data:", { ...data, serviceType, budget, timeline });
    toast.success("Solicitação enviada com sucesso!", {
      description: "Nossa equipe entrará em contato em breve."
    });
    reset();
    setServiceType("");
    setBudget("");
    setTimeline("");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#0f1824] via-[#1a2332] to-[#0f1824] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3b82f6] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ec4899] opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] text-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Solicite seu projeto</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Solicite Serviços de Software
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para 
              entender melhor suas necessidades e oferecer a solução ideal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Nome/Empresa */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#0f1824]">
                  Nome / Empresa *
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Campo obrigatório" })}
                  className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                  placeholder="Digite seu nome ou empresa"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0f1824]">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Campo obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#0f1824]">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  {...register("phone", { required: "Campo obrigatório" })}
                  className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                  placeholder="(00) 00000-0000"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Tipo de Serviço */}
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-[#0f1824]">
                  Tipo de Serviço *
                </Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Desenvolvimento Web</SelectItem>
                    <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                    <SelectItem value="fullstack">Desenvolvimento Full Stack</SelectItem>
                    <SelectItem value="backend">Backend / API</SelectItem>
                    <SelectItem value="frontend">Frontend / UI</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="data">Data Science / Analytics</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Orçamento */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-[#0f1824]">
                  Orçamento Estimado
                </Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]">
                    <SelectValue placeholder="Selecione uma faixa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                    <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                    <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                    <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                    <SelectItem value="100k+">R$ 100.000+</SelectItem>
                    <SelectItem value="discuss">Prefiro discutir</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Prazo */}
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-[#0f1824]">
                  Prazo Desejado
                </Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]">
                    <SelectValue placeholder="Selecione um prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgente (1-2 semanas)</SelectItem>
                    <SelectItem value="1month">1 mês</SelectItem>
                    <SelectItem value="2-3months">2-3 meses</SelectItem>
                    <SelectItem value="3-6months">3-6 meses</SelectItem>
                    <SelectItem value="6months+">Mais de 6 meses</SelectItem>
                    <SelectItem value="flexible">Flexível</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Descrição do Projeto */}
            <div className="space-y-2 mb-8">
              <Label htmlFor="description" className="text-[#0f1824]">
                Descrição do Projeto *
              </Label>
              <Textarea
                id="description"
                {...register("description", { required: "Campo obrigatório" })}
                className="border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6] min-h-[150px]"
                placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e quaisquer requisitos específicos..."
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#ec4899] hover:from-[#2563eb] hover:to-[#db2777] text-white py-6"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Solicitação
            </Button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Campos obrigatórios. Responderemos em até 24 horas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
