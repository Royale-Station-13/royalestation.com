import usePatreonPledge from "../hooks/usePatreonPledge"
import { useState, useEffect } from "react"

const PatreonBarClient = ({ pid }) => {
  const pledges = usePatreonPledge(pid)
  let pledge = pledges / 100
  let pledgeText = pledge.toFixed(2)
  const fullPledge = 75
  const fullPledgeText = fullPledge.toFixed(2)
  let pledgePercent = Math.min(100, Math.max(0, (pledge / fullPledge) * 100))
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "25px",
        boxShadow: "0 0 5px black",
      }}
    >
      <div
        style={{
          position: "absolute",
          fontSize: "15px",
          color: "white",
          textShadow: "0 0 5px black",
          marginLeft: "5px",
        }}
      >
        <strong>
          ${pledgeText} / ${fullPledgeText}
        </strong>
      </div>
      <div
        style={{
          backgroundColor: "rgb(182, 0, 0)",
          width: `${pledgePercent}%`,
          height: "100%",
        }}
      ></div>
    </div>
  )
}

export default PatreonBarClient
