import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type Props = {
  date: string
}
const TimeAgo: React.FC<Props> = ({ date }) => <span>{dayjs(date).fromNow()}</span>

export default TimeAgo
