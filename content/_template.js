page
	.desktop
		header
			black_frame_arrow
			ANNA BRABANT
			nav
				work
				archive
				cv
				press
				contact
			footer
				ig
				copyright
		main
			{{ content }}
	.mobile:
		hamburger
		ANNA BRABANT
		black_frame_arrow
		{{content}}
		footer

post
	.desktop
		carousel
			nav: left, right
			...img
		details_box
		modal_x
	.mobile
		back_arrow
		img
		title
		description
	.zoom
		modal_x
		img
		?title

content
	index
		carousel
	archive
		monoprints, undergrad, untitled
			grid
	cv
		name
		studio
		education
		exhibitions
		employment
	press
		article
			date
			details
			header
			body
			footer
	contact
		name
		location
		phone
		email
		form
