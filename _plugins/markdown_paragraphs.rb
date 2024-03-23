module Jekyll
  module MarkdownParagraphsFilter
    def markdown_paragraphs(input)
      # Wrap Markdown content in <p> tags
      "<p>#{input.strip}</p>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::MarkdownParagraphsFilter)
