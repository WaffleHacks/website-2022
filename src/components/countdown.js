import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

import "../css/countdown.css"

// Convert from polar coordinates to cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

// Generate the SVG command for an arc of a given radius and length
function describeArc(x, y, radius, startAngle, endAngle) {
  // Get the start and end points
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

  // Generate the SVG command
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ")
}

// Map a number in a range to a different range
const mapNumber = (number, inMin, inMax, outMin, outMax) =>
  ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

// Draw the circle for the individual number
const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
)

const Countdown = ({ time }) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const ticker = setInterval(() => {
      // Calculate the initial time
      const endpoint = DateTime.fromISO(time).toLocal()
      const difference = endpoint.diffNow([
        "days",
        "hours",
        "minutes",
        "seconds",
      ])

      // Set the state
      setDays(difference.days)
      setHours(difference.hours)
      setMinutes(difference.minutes)
      setSeconds(Math.floor(difference.seconds))
    }, 1000)
    return () => clearInterval(ticker)
  }, [time])

  const daysRadius = mapNumber(days, 0, 30, 0, 360)
  const hoursRadius = mapNumber(hours, 0, 24, 0, 360)
  const minutesRadius = mapNumber(minutes, 0, 60, 0, 360)
  const secondsRadius = mapNumber(seconds, 0, 60, 0, 360)

  return (
    <div className="countdown-wrapper">
      <div className="countdown-item">
        <SVGCircle radius={daysRadius} />
        {days}
        <span>days</span>
      </div>
      <div className="countdown-item">
        <SVGCircle radius={hoursRadius} />
        {hours}
        <span>hours</span>
      </div>
      <div className="countdown-item">
        <SVGCircle radius={minutesRadius} />
        {minutes}
        <span>minutes</span>
      </div>
      <div className="countdown-item">
        <SVGCircle radius={secondsRadius} />
        {seconds}
        <span>seconds</span>
      </div>
    </div>
  )
}

Countdown.propTypes = {
  time: PropTypes.string,
}

export default Countdown
