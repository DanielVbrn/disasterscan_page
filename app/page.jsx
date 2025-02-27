import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Zap } from "lucide-react"
import Image from "next/image"
import logo from "../assets/logo_disaster_scan.jpeg"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Zap className="h-6 w-6" />
            <span className="ml-2 font-bold">DisasterScan</span>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            <a href="#about" className="hover:text-primary">
              Sobre
            </a>
            <a href="#problem" className="hover:text-primary">
              Problema
            </a>
            <a href="#solution" className="hover:text-primary">
              Solução
            </a>
            <a href="#team" className="hover:text-primary">
              Equipe
            </a>
            <Button>Contato</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  DisasterScan - Prevendo e Recuperando de Catástrofes Ambientais
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Solução completa para previsão, atuação e recuperação rápida de desastres ambientais, apoiando pessoas e órgãos governamentais.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">
                  Comece Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Projeto</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    O DisasterScan é um sistema inovador desenvolvido para prever, atuar e auxiliar na recuperação de catástrofes ambientais, promovendo ações mais rápidas e precisas em todas as fases do gerenciamento de desastres. A solução visa beneficiar tanto pessoas comuns quanto órgãos governamentais.
                  </p>
                </div>
              </div>
              <Image
                alt="Sobre o Projeto"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src={logo}
                width="600"
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O Problema</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O gerenciamento de desastres ambientais ainda enfrenta desafios significativos em termos de previsibilidade, velocidade de resposta e recuperação eficaz. As ações muitas vezes são desorganizadas e ineficazes, o que agrava os impactos.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Falta de previsão precisa",
                  "Respostas lentas e desorganizadas",
                  "Impacto ambiental elevado",
                  "Falta de ferramentas integradas",
                ].map((problem) => (
                  <div key={problem} className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-red-500" />
                    <p className="text-sm font-medium">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Solução</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O DisasterScan integra diversas tecnologias para prever desastres, organizar respostas rápidas e auxiliar na recuperação, garantindo que as operações sejam mais eficientes e eficazes.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Previsão antecipada de desastres",
                  "Resposta rápida e organizada",
                  "Análises e relatórios precisos",
                  "Suporte contínuo às vítimas",
                  "Integração com órgãos governamentais",
                  "Recuperação eficaz",
                ].map((solution) => (
                  <div key={solution} className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <p className="text-sm font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Equipe</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Conheça a equipe dedicada por trás do DisasterScan, trabalhando para criar soluções que fazem a diferença.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "João Pedro",
                    role: "",
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Daniel Vitor",
                    role: "",
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Lays Emanuelly ",
                    role: "",
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Wagner Rodrigues ",
                    role: "",
                    image: "/placeholder.svg",
                  },
                  {
                    name: "Alexandro",
                    role: "",
                    image: "/placeholder.svg",
                  },
                ].map((member) => (
                  <div key={member.name} className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                    <Image
                      alt={member.name}
                      className="aspect-square rounded-full object-cover"
                      height="100"
                      src={member.image || "/placeholder.svg"}
                      width="100"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Junte-se a nós</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estamos sempre em busca de novas parcerias e apoio para continuar nosso trabalho em prol de salvar mais vidas.
                </p>
              </div>
              <Button size="lg">Fale Conosco</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
