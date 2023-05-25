import { useState, useEffect } from "react"

const usePatreonPledge = (pid) => {
  const [pledges, setPledges] = useState(0)
  useEffect(() => {
    const fetchPledges = async () => {
      let res = await fetch(
        `https://cors.itsmeow.dev/www.patreon.com/api/campaigns/${pid}`
      )

      if (res && res.ok) {
        const json = await res.json()
        let pledgeAmt = json.data.attributes.campaign_pledge_sum
        setPledges(pledgeAmt)
      }
    }

    if (pid) {
      fetchPledges()
    }
  }, [pid])

  return pledges
}

export default usePatreonPledge
