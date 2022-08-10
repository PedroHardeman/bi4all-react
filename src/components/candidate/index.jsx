import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export const Candidate = ({id, name}) => {
  return (
		<Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name.firstname} {name.lastname}
        </Typography>
      </CardContent>
			<CardActions>
        <a href={`/candidates/${id}`}><Button size="small">Details</Button></a>
      </CardActions>
    </Card>
  )
};