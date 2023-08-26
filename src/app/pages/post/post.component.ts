import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/data'

interface IPost {
  id: string,
  title: string,
  cover: string,
  date: string,
  description: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export default class PostComponent implements OnInit {
  private id: string | null  = ''
  post: IPost = {
    id: '',
    title: '',
    cover: '',
    date: '',
    description: ''
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )
    this.setPost(this.id!)
  }

  setPost(id: string) {
    const result: IPost = posts.filter(article => article.id === id)[0]
    result && (this.post = result)
  }
}
