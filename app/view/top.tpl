<div class="row-fluid">
		<div class="span12">
			<div class="page-header">
				<h1>
					{{topInfo.title}} <small>{{topInfo.sub_title}}</small>
				</h1>
			</div>
			  <div style="height: 305px">
			    <carousel interval="myInterval">
			      <slide ng-repeat="slide in topInfo.slides" active="slide.active">
			        <img ng-src="{{slide.image}}" style="margin:auto;">
			        <div class="carousel-caption">
			          <!-- <h4>Slide {{$index}}</h4> -->
			          <h4>{{slide.text}}</h4>
			        </div>
			      </slide>
			    </carousel>
			  </div>
			<h5 class="text-right">
				我们致力于打造一个穆斯林生活指南
			</h5>
			<p class="text-right">
				网站正在建设中,期待您的加入
			</p>
			<p class="text-right">
				QQ群:187519615
			</p>
			<wb:follow-button uid="2991975565" type="red_1" width="67" height="24" ></wb:follow-button>
			<wb:share-button appkey="3WldZL" addition="simple" type="button" ralateUid="1725710653" default_text="穆斯林开心网--您手边的生活手册"></wb:share-button>
		</div>
</div>