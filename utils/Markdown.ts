export default function (text: string) {
  text = text.replace(/\*\*(.*?)\*\*/gm, function (match, p1) {
    return "<b>" + p1 + "</b>";
  });
  return text;
}
