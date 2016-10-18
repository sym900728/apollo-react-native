'use strict'

import React, {
  Component
} from 'react'

import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import HomeList from './HomeList'

class HomeCentre extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.data)
    let dataSource = (this.props.data.posts) ? this.props.data.posts : []
    return (
      <View style={styles.container}>
        <HomeList dataSource={dataSource} />
        <LoadingIndicator isVisible={this.props.data.loading} />
      </View>
    )
  }
}

const QueryHomeCentre = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 44,
    left: 0,
    right: 0,
    bottom: 0
  }
})

const withData = graphql(QueryHomeCentre)

export default withData(HomeCentre)
