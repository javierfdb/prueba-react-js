import React from "react";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const TooltipMemes = () => {
    return (
        <>
            <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props}>
                   This Is Fine
                   <br />
                   Disaster Girl
                   <br />
                   Bugs bunny communist
                   <br />
                   Grant Gustin over grave
                   <br />
                   Batman Slapping Robin
                  </Tooltip>
                )}
                placement="bottom"
              ><Button variant="warning">Suggestions</Button>
              </OverlayTrigger>
        </>
    )
    
}

export default TooltipMemes;