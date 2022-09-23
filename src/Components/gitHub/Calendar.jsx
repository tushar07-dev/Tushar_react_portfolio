import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export const Calendar = () => {
  return (
        <Row style={{ justifyContent: "center", padding: "0% 5%",color:"wheat"  }}>
      
      <GitHubCalendar
      className="project-heading"

       style={{width:"100%",
    margin: "0 auto"}}
        username="tushar07-dev"
        blockSize={15}
        blockMargin={5}
        color="#C084F5"
        fontSize={11}
      />
    </Row>

  )
}

