import { Card } from 'antd'

const tabList = [
    {
        key: 'Flight Search',
        tab: 'Flight Search'
    },
    {
        key: 'Hotel Search',
        tab: 'Hotel Search'
    }
]

const contentList = {
    tab1: <p>content 1</p>,
    tab2: <p>content 2</p>
}

// const tabListNoTitle = [
//     {
//       key: 'article',
//       tab: 'article',
//     },
//     {
//       key: 'app',
//       tab: 'app',
//     },
//     {
//       key: 'project',
//       tab: 'project',
//     },
//   ];
  
  // const contentListNoTitle = {
  //   article: <p>article content</p>,
  //   app: <p>app content</p>,
  //   project: <p>project content</p>,
  // };
  

const Search = () => {
    const state = {
        key: 'tab1',
        noTitleKey: 'app',
      };

    return ( 
        <div>
            <Card
          style={{ width: '100%' }}
          extra={<a href="/">More</a>}
          tabList={tabList}
          activeTabKey={state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[state.key]}
        </Card>
        <br />
        <br />

        </div>
     );
}
 
export default Search;