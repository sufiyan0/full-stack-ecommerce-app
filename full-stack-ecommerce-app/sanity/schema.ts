import { type SchemaTypeDefinition } from 'sanity'
import {prodect} from './prodect'
import {category} from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [prodect,category],
}
