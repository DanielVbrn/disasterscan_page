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

const events = [
  {
    id: "1",
    title: "Startup Weekend São Paulo",
    date: "2023-03-15",
    location: "São Paulo, SP",
    type: "hackathon",
    description: "Nosso primeiro grande evento! Desenvolvemos o MVP inicial da nossa solução em 54 horas.",
    achievement: "2º Lugar Geral",
    participants: 150,
    impact: "high",
  },
  {
    id: "2",
    title: "Demo Day Acelera Partners",
    date: "2023-05-20",
    location: "Rio de Janeiro, RJ",
    type: "pitch",
    description: "Apresentação para investidores anjo e fundos de venture capital.",
    achievement: "Melhor Pitch Técnico",
    participants: 50,
    impact: "high",
  },
  {
    id: "3",
    title: "Web Summit Rio",
    date: "2023-07-10",
    location: "Rio de Janeiro, RJ",
    type: "conference",
    description: "Participação como startup expositora no maior evento de tecnologia da América Latina.",
    participants: 15000,
    impact: "high",
  },
]

const getEventIcon = (type) => {
  const iconMap = {
    hackathon: <LightbulbIcon />,
    pitch: <TrackChangesIcon />,
    conference: <PeopleIcon />,
    workshop: <EmojiEventsIcon />,
    award: <Award />,
    launch: <RocketIcon />,
    partnership: <PeopleIcon />,
  };
  return iconMap[type] || <Calendar />;
};


const getEventColor = (type) => {
  const colorMap = {
    hackathon: "secondary",
    pitch: "primary",
    conference: "success",
    workshop: "warning",
    award: "info",
    launch: "error",
    partnership: "primary",
  }
  return colorMap[type] || "default"
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
            Todos
          </Button>
          <Button variant={filter === "hackathon" ? "contained" : "outlined"} onClick={() => setFilter("hackathon")}>
            Hackathons
          </Button>
          <Button variant={filter === "pitch" ? "contained" : "outlined"} onClick={() => setFilter("pitch")}>
            Pitches
          </Button>
        </ButtonGroup>
      </Box>

      {/* Timeline */}
      <Timeline position="alternate">
        {filteredEvents.map((event, index) => (
          <TimelineItem key={event.id}>
            <TimelineSeparator>
              <TimelineDot color={getEventColor(event.type)}>{getEventIcon(event.type)}</TimelineDot>
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
