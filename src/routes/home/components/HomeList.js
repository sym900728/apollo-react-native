'use strict'

import React, {
  Component
} from 'react'

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Dimensions,
  PixelRatio
} from 'react-native'

const { width } = Dimensions.get('window')

export default class HomeList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataSource)
    }
    this.renderRow = this.renderRow.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource)})
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps
        enableEmptySections
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator} />
    )
  }

  renderRow (rowData, sectionID, rowID) {
    return (
      <Item rowData={rowData} sectionID={sectionID} rowID={rowID} />
    )
  }

  renderSeparator (sectionID, rowID) {
    return (
      <View key={'separator-' + sectionID + '-' + rowID} style={styles.divider} />
    )
  }
}

class Item extends Component {

  render () {
    return (
      <View>
        <Text style={{fontSize: 28, color: 'black'}}>Title</Text>
        <Text style={{fontSize: 18, color: 'blue', paddingLeft: 20}}>{this.props.rowData.title}</Text>
        <Text style={{fontSize: 24, color: 'black'}}>Author</Text>
        <Text style={{fontSize: 18, color: 'blue', paddingLeft: 20}}>FirstName: {this.props.rowData.author.firstName}</Text>
        <Text style={{fontSize: 18, color: 'blue', paddingLeft: 20}}>LastName: {this.props.rowData.author.lastName}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  divider: {
    width: width,
    height: 1 / PixelRatio.get(),
    backgroundColor: '#E2E2E2'
  }
})
