import { Template } from 'meteor/templating';
import { Table } from './Table';

Template.page.helpers({
  Table() {
    return Table;
  },
});

Template.page.onDestroyed(function() {
  console.log('destroying page');
})
