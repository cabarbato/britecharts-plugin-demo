import React from 'react';
import { Bar } from 'britecharts-react';
import { colors } from 'britecharts';

type GraphProps = {
    data
  };
  
const formatData = (d) => {
        const data = [],
            skip_keys = [process.env.REACT_APP_SAMPLE_CATEGORY, process.env.REACT_APP_SAMPLE_LABEL],
            entries = Object.entries(d);
        for (const entry of entries) {
            if (!skip_keys.includes(entry[0])) data.push({
                "name": entry[0],
                "value": +entry[1]
            })
        }
        return data
    };
    
const ChartGraph: React.FC<GraphProps> = ({data}) => {
    return  <Bar
        data={formatData(data)}
        height={56}
        margin={{ top: 0, bottom: 0, left: -10, right: 0 }}
        yAxisPaddingBetweenChart={0}
        betweenBarsPadding={0}
        colorSchema={colors.colorSchemas.britecharts}
    />
}
export default ChartGraph;