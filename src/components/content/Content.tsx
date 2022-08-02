import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

interface IUserName {
  firstname: string,
  lastname: string,
}

interface IUserCard {
  name: IUserName,
  // onClick: () => void,
}

export const Content = ({name}: IUserCard) => {
  return (
		<Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name.firstname} {name.lastname}
        </Typography>
      </CardContent>
			<CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  )
};