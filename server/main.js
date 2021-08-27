import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import TronApi from "./tron/tronApi";

import './api/api';

Meteor.startup(() => {
  TronApi.getBlockTxs();
});
