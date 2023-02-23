import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
    data: Array<any>
}

const baseData = ["subject", "fullMark"]
export const PlayerRadarChart = ({data} : Props) => {
    const keys = data.length > 0 ? Object.keys(data[0]).filter(el => !baseData.includes(el)) : []
    return(
        <ResponsiveContainer width="100%" height={600}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                {keys.map(key =>{
                    const color = "#" + Math.floor(Math.random()*16777215).toString(16)
                    return (
                        <Radar dataKey={key} stroke={color} fill={color} fillOpacity={0.1} />
                    )
                })}
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    )
}