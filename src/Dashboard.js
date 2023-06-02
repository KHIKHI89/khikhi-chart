import React from "react";
// import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./doc.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("report-rgl")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}
function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "report-rgl",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
class Dashboard extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(getFromLS("layouts") || {})),
      items: [
        { i: "a", x: 0, y: 0, w: 3, h: 6, minW: 2, minH: 3, },
        { i: "b", x: 3, y: 0, w: 3, h: 6, minW: 2, minH: 3, },
        { i: "c", x: 6, y: 0, w: 3, h: 6, minW: 2, minH: 3, },
        { i: "d", x: 0, y: 0, w: 3, h: 6, minW: 2, minH: 3, },
     
      ],
      tainted: null
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onResizeStop = this.onResizeStop.bind(this);
    // this.onDragStop = this.onDragStop.bind(this);
    this.resizeChartDone = this.resizeChartDone.bind(this);
    this.onWidthChange = this.onWidthChange.bind(this);
  }
  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  onResizeStop(layout, oldItem, newItem, placeholder, e, element) {
    console.log(
      `${JSON.stringify(oldItem)} resized to ${JSON.stringify(newItem)} `
    );
    this.setState({ tainted: oldItem.i });
  }

  resizeChartDone() {
    this.setState({ tainted: null });
  }
  onWidthChange(containerWidth, margin, cols, containerPadding) {
    console.log(`width of container changed to ${containerWidth}`);
    this.setState({ tainted: "all" });
  }
  render() {
    const { items, tainted } = this.state;
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={this.state.layouts}
        cols={{ lg: 12, md: 9, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        onLayoutChange={this.onLayoutChange}
        autoSize={false}
        onResizeStop={this.onResizeStop}
        onWidthChange={this.onWidthChange}
      >
        {items.map((item, index) => {
          let { i,  ...dataGrid } = item;
          return (
            <div key={i} data-grid={{ ...dataGrid }}>
              <form>
                <select>
                    <label>Item</label>
                    <option value="">1</option>
                    <option>fg</option>
                </select>
              </form>
            </div>
          );
        })}
      </ResponsiveGridLayout>
    );
  }
}
export default Dashboard;
