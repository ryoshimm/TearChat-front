import React from 'react'
import { connect } from 'react-redux'

// containers
import ColumnPublicMessage from '../ColumnPublicMessage'
import ColumnPrivateMessage from '../ColumnPrivateMessage'
import ColumnPc from '../ColumnPc'

// action
import { removeTable } from '../Table/action'


class ColumnManager extends React.PureComponent {
  render() {
    // id = 'public' | 'private_1' | 'group_1'
    const { id, ...props } = this.props

    // types = ['typeName', 'channelId']
    const types = id.split('_')

    if (types[0] === 'public') {
      return <ColumnPublicMessage {...props} />
    } else if (types[0] === 'private') {
      return <ColumnPrivateMessage {...props} channelId={parseInt(types[1], 10)} />
    } else if (types[0] === 'group') {
      return null
    } else if (types[0] === 'pc') {
      return <ColumnPc {...props} fkPcId={types[1]} />
    }
    return null
  }
}

const mapStateToProps = (state) => ({
  ids: state.Table.ids,
})

const mapDispatchToProps = (dispatch, { id }) => ({
  onClose() {
    dispatch(removeTable(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnManager)
