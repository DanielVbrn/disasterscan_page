"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Button,
  ButtonGroup,
  Grid,
  Box,
} from '@mui/material';

// import catalisa_ict from "../../public/assets/images/catalisa_ict-removebg.png"
// import startup_NO from "../../public/assets/images/startup_NO.png"
// import liga_jovem from "../../public/assets/images/liga_jovem.png"

import Image from "next/image"

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketIcon from '@mui/icons-material/Rocket';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { Award, Calendar } from "lucide-react"
import { LibraryAddOutlined } from "@mui/icons-material";

const events = [
  {
    id: "1",
    title: "Desafio Liga Jovem",
    date: "2024-06-20",
    location: "Teresina, PI",
    type: "liga_jovem",
    description: "Nosso primeiro grande evento, onde nossa proposta avançou até a 2º fase da Liga Jovem como ideação.",
    achievement: "Aprovados na 1º Fase",
    participants: 54000,
    impact: "high",
  },
  {
    id: "2",
    title: "Startup Nordeste",
    date: "2024-09-22",
    location: "Teresina, PI",
    type: "starttup_nordeste",
    description: "Nosso segundo grande evento! Desenvolvemos um protótipo inicial e fomos aprovados em todas as fases para receber a bolsa.",
    achievement: "Projeto aprovado na 2º e na 3 fase",
    participants: 417,
    impact: "high",
  },
  {
    id: "3",
    title: "Catalisa ICT",
    date: "2025-04-08",
    location: "Teresina, PI",
    type: "catalisa_ict",
    description: "Participando Atualmente",
    achievement: "_",
    participants: 2000,
    impact: "high",
  },
]

const getEventImage = (type) => {
  const imageMap = {
    liga_jovem: "/assets/images/liga_jovem.png",
    startup_nordeste: "/assets/images/startup_NO.png",
    catalisa_ict: "/assets/images/catalisa_ict-removebg.png",
  };
  return imageMap[type] || "/assets/icons/default.png";
};


const getEventColor = (type) => {
  const colorMap = {
    programa_aceleracao: "secondary",
    pitch: "primary",
    conference: "success",
    workshop: "warning",
    award: "info",
    launch: "error",
    partnership: "primary",
  }
  return colorMap[type] || "primary"
}

export default function StartupRoadmap() {
  const [filter, setFilter] = useState("all")

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.type === filter)

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 3 }}>
      {/* Filtros */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ButtonGroup variant="outlined">
          <Button variant={filter === "all" ? "contained" : "outlined"} onClick={() => setFilter("all")}>
            Programas que Participamos
          </Button>
          {/* <Button variant={filter === "Programas de Aceleração" ? "contained" : "outlined"} onClick={() => setFilter("all")}>
            Programas de Aceleração
          </Button>
          <Button variant={filter === "pitch" ? "contained" : "outlined"} onClick={() => setFilter("pitch")}>
            Eventos
          </Button> */}
        </ButtonGroup>
      </Box>

      {/* Timeline */}
      <Timeline position="alternate">
        {filteredEvents.map((event, index) => (
          <TimelineItem key={event.id}>
            <TimelineSeparator>
              {/* <Image
                src={getEventImage(event.type)}
                alt={event.type}
                width={40}
                height={40}
                className={getEventColor(event.type)}
              /> */}
              {index < filteredEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ mb: 2 }}>
                <CardHeader
                  title={event.title}
                  subheader={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Calendar fontSize="small" />
                      {new Date(event.date).toLocaleDateString("pt-BR")}
                    </Box>
                  }
                  action={
                    <Chip
                      label={event.impact === "high" ? "Alto Impacto" : "Médio Impacto"}
                      color={event.impact === "high" ? "success" : "warning"}
                      size="small"
                    />
                  }
                />
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      {event.location}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>

                  {event.achievement && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                      <EmojiEventsIcon fontSize="small" color="warning" />
                      <Typography variant="body2" fontWeight="bold">
                        {event.achievement}
                      </Typography>
                    </Box>
                  )}

                  {event.participants && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <PeopleIcon fontSize="small" color="primary" />
                      <Typography variant="body2">{event.participants.toLocaleString()} participantes</Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Estatísticas */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {events.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Eventos Totais
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="success.main" fontWeight="bold">
                {events.filter((e) => e.achievement).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Conquistas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="secondary.main" fontWeight="bold">
                {events.reduce((acc, e) => acc + (e.participants || 0), 0).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pessoas Alcançadas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="warning.main" fontWeight="bold">
                {events.filter((e) => e.impact === "high").length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Alto Impacto
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
