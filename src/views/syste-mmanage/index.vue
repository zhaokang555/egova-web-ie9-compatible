<template>
</template>
<template src="./index.html"></template>

<style scoped src="./index.less"></style>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import View from '@/view';
    @Component
    export default class SystemManage extends View {
        public msg = "系统管理";
        public columns = [
            {
                title: 'Name',
                key: 'name',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Icon', {
                            props: {
                                type: 'person'
                            }
                        }),
                        h('strong', params.row.name)
                    ]);
                }
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'Address',
                key: 'address'
            },
            {
                title: 'Action',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, 'View'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    this.remove(params.index);
                                }
                            }
                        }, 'Delete')
                    ]);
                }
            }
        ];
        public data = [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }
        ];
        public show(index: number) {
                this.$modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
        }
        public remove (index: number) {
            this.data.splice(index, 1);
        }
    }
</script>

