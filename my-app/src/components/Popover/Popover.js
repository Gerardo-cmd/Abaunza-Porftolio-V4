import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';

let Example = ({direction}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Did you know?</Popover.Title>
            <Popover.Content>
            These skills are <strong>chronologically ordered</strong> to showcase a sort of timeline!
            </Popover.Content>
        </Popover>
        );
    
    return (
        <OverlayTrigger trigger="click" placement={direction} overlay={popover}>
            <Button variant="success" style={{fontWeight: 'bold'}}>?</Button>
        </OverlayTrigger>
    )
}

export default Example;