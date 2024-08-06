import React from 'react'
import AiInterviewLogo from "/ai-interview-logo-dark"
import Image from "next/image"
type Props = {}

const Logo = (props: Props) => {
  return (
   <Image src={AiInterviewLogo} alt="AI Interviewz Logo" height={100} width={100} />
  )
}