"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function InvitePage() {
  const pathname = usePathname(); // e.g. /invite/john
  const segments = pathname.split("/");
  const username = segments[2]; // 'john'

  const [inviter, setInviter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInviter = async () => {
      try {
        const res = await fetch(`/api/users?username=${username}`);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setInviter(data);
        }
      } catch (err) {
        setError("Error fetching inviter info");
      }
    };
    fetchInviter();
  }, [username]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!inviter) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>You&apos;ve been challenged by {inviter.username}!</h1>
      <p>
        Score: {inviter.score.correct} correct, {inviter.score.incorrect}{" "}
        incorrect
      </p>
      <p>Think you can beat them?</p>
      {/* Provide a link or button to go back to Home and register */}
      <a href="/">Click here to register and play!</a>
    </div>
  );
}
