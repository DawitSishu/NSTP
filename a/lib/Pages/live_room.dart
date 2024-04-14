import 'package:flutter/material.dart';
import 'package:livekit_client/livekit_client.dart';

class LiveRoom extends StatefulWidget {
  const LiveRoom({Key? key}) : super(key: key);

  @override
  State<LiveRoom> createState() => _LiveRoomState();
}

class _LiveRoomState extends State<LiveRoom>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Room room;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this);
    _initializeRoom();
  }

  @override
  void dispose() {
    _controller.dispose();
    room.disconnect();
    super.dispose();
  }

  Future<void> _initializeRoom() async {
    final roomOptions = RoomOptions(
      adaptiveStream: true,
      dynacast: true,
    );

    room = Room();

    await room.connect(
      "wss://jemaw-xj4zzxjq.livekit.cloud",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTMwOTI1NzYsImlzcyI6IkFQSU1ta3ljMmkyak5ocyIsIm5iZiI6MTcxMzA5MTY3Niwic3ViIjoiZGF2ZSIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJkYXZlIiwicm9vbUpvaW4iOnRydWV9fQ.MqgU3SZtO7aPunYMfcCZXYUHYz7x61rr7QxokmuWF4w",
      roomOptions: roomOptions,
    );
    try {
      // video will fail when running in ios simulator
      await room.localParticipant?.setCameraEnabled(true);
    } catch (error) {
      print('Could not publish video, error: $error');
    }

    await room.localParticipant?.setMicrophoneEnabled(true);

    setState(() {}); // trigger UI update
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Live Room'),
      ),
      body: _buildBody(),
    );
  }

  Widget _buildBody() {
    if (room != null) {
      return ListView.builder(
        itemCount: room.remoteParticipants.length,
        itemBuilder: (context, index) {
          final participant = room.remoteParticipants[index];
          return _buildParticipantVideo(participant!);
        },
      );
    } else {
      return Center(
        child: CircularProgressIndicator(),
      );
    }
  }

  Widget _buildParticipantVideo(RemoteParticipant participant) {
    return SizedBox(
      width: 200,
      height: 150,
      child: VideoView(participant),
    );
  }
}

class VideoView extends StatefulWidget {
  final RemoteParticipant participant;

  VideoView(this.participant);

  @override
  _VideoViewState createState() => _VideoViewState();
}

class _VideoViewState extends State<VideoView> {
  late VideoTrack? videoTrack;

  @override
  void initState() {
    super.initState();
    _initializeVideoTrack();
  }

  @override
  void dispose() {
    super.dispose();
    _disposeVideoTrack();
  }

  Future<void> _initializeVideoTrack() async {
    setState(() {}); // trigger UI update
  }

  void _disposeVideoTrack() {
    videoTrack?.disable();
    videoTrack = null;
  }

  @override
  Widget build(BuildContext context) {
    return videoTrack != null
        ? VideoRendererWidget(videoTrack!)
        : Placeholder();
  }
}

class VideoRendererWidget extends StatelessWidget {
  final VideoTrack videoTrack;

  VideoRendererWidget(this.videoTrack);

  @override
  Widget build(BuildContext context) {
    final viewId = videoTrack.sid;
    return AndroidView(viewType: 'plugins.livekit.io/texture_$viewId');
  }
}
