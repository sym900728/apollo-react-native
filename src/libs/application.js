'use strict'

import Immutable from 'immutable'
import { isPlainObj } from './utils/functions'

export const application = (platform) => {
  Immutable.Record.constructor.prototype.fromJS = function (values) {
    let that = this
    let nested = Immutable.fromJS(values, function (key, value) {
      if (that.prototype[key] && that.prototype[key].constructor.prototype instanceof Immutable.Record) {
        if (Array.isArray(value) || isPlainObj(value)) return that.prototype[key].constructor.fromJS(value)
        return that.prototype[key].constructor.fromJS(value.toJS())
      }
      return value
    })
    return this(nested)
  }
}
