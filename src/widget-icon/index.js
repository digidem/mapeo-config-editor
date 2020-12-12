import previewComponent from "./IconPreview";
import controlComponent from "./IconControl";
import schema from "./schema";

const Widget = (opts = {}) => ({
  name: "icon",
  controlComponent,
  previewComponent,
  schema,
  ...opts,
});

export const NetlifyCmsWidgetImage = {
  Widget,
  controlComponent,
  previewComponent,
};
export default NetlifyCmsWidgetImage;
