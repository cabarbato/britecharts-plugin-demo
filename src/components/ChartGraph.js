import React from 'react';
import { Bar, withResponsiveness, Tooltip, Colors } from 'britecharts-react';
import { colors } from 'britecharts';

const ResponsiveBarChart = withResponsiveness(Bar),
    formatData = (d) => {
        const data = [{
            topics: [],
            date: "2015-06-27T07:00:00.000Z"
        }],
            skip_keys = [process.env.REACT_APP_SAMPLE_CATEGORY, process.env.REACT_APP_SAMPLE_LABEL],
            entries = Object.entries(d);

        for (const entry of entries) {
            if (!skip_keys.includes(entry[0])) data[0]["topics"].push({
                "name": entry[0],
                "value": +entry[1].replace('$', '')
            })
        }

        return data
    };

const renderBar = (props) => {
    props.data = props.data[0]["topics"]

    return (
        <ResponsiveBarChart
            height={56}
            margin={{ top: 0, bottom: 0, left: -10, right: 0 }}
            yAxisPaddingBetweenChart={0}
            betweenBarsPadding={0}
            colorSchema={colors.colorSchemas.britecharts}
            {...props}
        />
    )
};

export default function ChartGraph(props) {
    return <Tooltip
        data={formatData(props.data)}
        render={renderBar}
        topicLabel="topics"
        title="Tooltip Title"
    //show={() =>true}
    //tooltipOffset={{x: 0, y: 0}}
    />
}