module.exports = {
	// 可选类型
	types   : [
		{value: "feat", name: "feat: 🚀 新功能", emoji: "🚀"},
		{value: "fix", name: "fix: 🧩 修复", emoji: "🧩"},
		{value: "docs", name: "docs: 📚 文档变更", emoji: "📚"},
		{value: "style", name: "style: 🎨 代码格式(不影响代码运行的变动)", emoji: "🎨"},
		{
			value: "refactor",
			name : "refactor: ♻️ 重构(既不是增加feature，也不是修复bug)",
			emoji: "♻️",
		},
		{value: "perf", name: "perf: ⚡️ 性能优化", emoji: "⚡️"},
		{value: "test", name: "test: ✅ 增加测试", emoji: "✅"},
		{value: "chore", name: "chore: 🔨 构建过程或辅助工具的变动", emoji: "🔨"},
		{value: "revert", name: "revert: ⏪️ 回退", emoji: "⏪️"},
		{value: "build", name: "build:📦️ 打包", emoji: "📦️"},
	],
	useEmoji: true,
	// 消息步骤
	messages: {
		type         : "type:",
		customScope  : "score(optional):",
		subject      : "describe(required):",
		body         : "detail(optional):",
		footer       : "close-issue(optional):",
		confirmCommit: "confirm?(y/n/e/h)",
	},
	// 跳过问题
	skipQuestions: ["body", "footer"],
	// subject文字长度默认是72
	subjectLimit: 72,
}


