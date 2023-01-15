import { useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import moment from 'moment';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
    },
    dateHolder: {
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    dateText: {
      color: theme.color.misc,
      fontSize: 10
    },

    newsContianer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    imageHolder: {
      width: '20%'
    },

    textHolder: {
      width: '75%'
    },
    newsText: {
      color: theme.color.misc,
      fontSize: 15
    },
    imageItem: {
      width: '100%',
      height: 58
    }

  })
  return styles
}

type NewsListProps = {
  style?: any,
  payload?: any,
  index?: number
}

const NewsList = memo<NewsListProps>(({ style, payload }) => {
  const Styles = useThemeAwareObject(createStyles)
  function getColor(keyword: string) {
    switch (keyword) {
      case "Bullish":
        return "#336d16";
      case "Bearish":
        return "#FF0000";
      case "Neutral":
        return "#9CC0E7";
      case "Somewhat-Bullish":
        return "#90EE90";
      case "Somewhat-Bearish":
        return "#FB607F";
      default:
        return "Invalid keyword";
    }
  }


  return (
    <View style={[Styles.container, { ...style }]}>
      <View style={Styles.dateHolder}>
        <Text style={Styles.dateText}>{moment(payload.time_published).format('MMM Do YYYY, h:mm a')}</Text>
        <View style={{
          backgroundColor: getColor(payload.overall_sentiment_label),
          width: 30,
          marginRight: 20
        }}></View>
      </View>
      <View style={Styles.newsContianer}>
        <View style={Styles.imageHolder}>
          {
            payload.banner_image &&
            <Image style={Styles.imageItem} source={{ uri: payload.banner_image }} />
          }

        </View>
        <View style={Styles.textHolder}>
          <Text style={Styles.newsText}>{payload.title}</Text>
        </View>

      </View>

    </View>
  )
})

export default NewsList;