import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts"
import { colors } from "../style/colors"
import { TirsChartData } from "../utils/data"

interface Props {
    data: Array<TirsChartData>
}

export const TirsChart = ({data} : Props) => {
    return (
        <ResponsiveContainer width="100%" height={600}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="t2reussi" name="2pts réussis" stackId="a" fill={colors.green} />
            <Bar dataKey="t2rate" name="2pts ratés" stackId="a" fill={colors.red} />
            <Bar dataKey="t3reussi" name="3pts réussis" stackId="b" fill={colors.green} />
            <Bar dataKey="t3rate" name="3pts ratés" stackId="b" fill={colors.red} />
            <Bar dataKey="lfreussi" name="Lfs réussis" stackId="c" fill={colors.green} />
            <Bar dataKey="lfrate" name="Lfs ratés" stackId="c" fill={colors.red} />
          </ComposedChart>
        </ResponsiveContainer>
    )
}