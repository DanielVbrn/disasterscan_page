'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Zap } from "lucide-react"
import logo from "../public/assets/logo_disaster_scan.jpeg"

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import StartupRoadmap from '@/app/roadmap/startup-roadmap'
import { members } from './team'


export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll for navigation
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  }

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-background/80 shadow-md' : 'bg-background/95'
          } backdrop-blur supports-[backdrop-filter]:bg-background/60`}
        style={{ opacity: headerOpacity }}
      >
        <div className="container flex h-14 items-center">
          <motion.div
            className="mr-4 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={logo} height={50} width={50} alt="DisasterScan Logo" />
            <span className="ml-2 font-bold">DisasterScan</span>
          </motion.div>
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            {['about', 'problem', 'solution', 'team'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="hover:text-primary transition-colors"
                onClick={(e) => handleNavClick(e, `#${section}`)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            <Button
              onClick={() => setIsContactOpen(true)}
              className="hover:scale-105 transition-transform"
            >
              Contato
            </Button>
          </nav>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-6 text-center">
                <motion.h1
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                >
                  <span className="block mb-2">
                    <span className="bg-gradient-to-r from-green-500 via-green-800 to-amber-900 bg-clip-text text-transparent text-8xl">
                      DisasterScan
                    </span>
                  </span>
                  <span className="block text-6xl">Prevendo e Recuperando de Catástrofes Ambientais</span>
                </motion.h1>

                <motion.p
                  className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-black/30 px-4 py-2 rounded-lg"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                  Solução completa para previsão, atuação e recuperação rápida de desastres ambientais,
                  apoiando pessoas e órgãos governamentais.
                </motion.p>
              </div>

              <div className="space-x-4">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  Comece Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform"
                  onClick={() => handleNavClick(new Event('click'), '#about')}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Projeto</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    O DisasterScan é um sistema inovador desenvolvido para prever, atuar e auxiliar na recuperação de catástrofes ambientais, promovendo ações mais rápidas e precisas em todas as fases do gerenciamento de desastres.
                  </p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt="Sobre o Projeto"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src={logo}
                  width="600"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section
          id="problem"
          className="w-full py-12 md:py-24 lg:py-32"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O Problema</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O gerenciamento de desastres ambientais ainda enfrenta desafios significativos em termos de previsibilidade, velocidade de resposta e recuperação eficaz.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Falta de previsão precisa",
                  "Respostas lentas e desorganizadas",
                  "Impacto ambiental elevado",
                  "Falta de ferramentas integradas",
                ].map((problem) => (
                  <motion.div
                    key={problem}
                    className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <CheckCircle className="h-6 w-6 text-red-500" />
                    <p className="text-sm font-medium">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          id="solution"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Solução</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O DisasterScan integra diversas tecnologias para prever desastres, organizar respostas rápidas e auxiliar na recuperação.
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
                  <motion.div
                    key={solution}
                    className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <p className="text-sm font-medium">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/*RoadMap Section*/}
        <StartupRoadmap />


        {/* Team Section */}
        <motion.section
          id="team"
          className="w-full py-12 md:py-24 lg:py-32"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Equipe</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Conheça a equipe dedicada por trás do DisasterScan, trabalhando para criar soluções que fazem a diferença.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <motion.div
                    key={member.name}
                    className="flex flex-col items-center space-y-4 rounded-lg border p-4"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                  >
                    <Image
                      alt={member.name}
                      className="aspect-square rounded-full object-cover"
                      height="100"
                      src={member.image}
                      width="100"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Junte-se a nós</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estamos sempre em busca de novas parcerias e apoio para continuar nosso trabalho em prol de salvar mais vidas.
                </p>
              </div>
              <Button
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => setIsContactOpen(true)}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Entre em Contato</DialogTitle>
            <DialogDescription>
              Para mais informações, entre em contato pelos canais abaixo:
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📧 Email:</span>
              <span>disasterscan@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">📞 Telefone:</span>
              <span>(86) 98145-3069</span>
            </div>
          </div>

          <Button
            className="hover:scale-105 transition-transform"
            onClick={() => setIsContactOpen(false)}
          >
            Fechar
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  )
}