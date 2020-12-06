import './Video.css';
import Iframe from 'react-iframe';

function Video({ clip, layout }) {
  return (
    <div className={`video ${layout === 'list' && 'video_layout_list'}`}>
      <Iframe className={`video__iframe ${layout === 'list' && 'video__iframe_layout_list'}`}
        url={`https://www.youtube.com/embed/${clip.id.videoId}`}
        allowFullScreen
      />
      <div className={`video__info ${layout === 'list' && 'video__info_layout_list'}`}>
        <h2 className={`video__title ${layout === 'list' && 'video__title_layout_list'}`}>{clip.snippet.title}</h2>
        <p className={`video__subtitle ${layout === 'list' && 'video__subtitle_layout_list'}`}>{clip.snippet.description}</p>
      </div>
    </div>
  );
}

export default Video;
