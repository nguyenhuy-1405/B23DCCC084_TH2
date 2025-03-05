import React, { useState } from 'react';
import { Button, Card, List, Typography } from 'antd';

const { Title, Text } = Typography;

const choices = ['Kéo', 'Búa', 'Bao'];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const getResult = (playerChoice: string, computerChoice: string) => {
  if (playerChoice === computerChoice) return 'Hòa';
  if (
    (playerChoice === 'Kéo' && computerChoice === 'Bao') ||
    (playerChoice === 'Búa' && computerChoice === 'Kéo') ||
    (playerChoice === 'Bao' && computerChoice === 'Búa')
  ) return 'Thắng';
  return 'Thua';
};

const OanTuTi = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleClick = (playerChoice: string) => {
    const computerChoice = getRandomChoice();
    const gameResult = getResult(playerChoice, computerChoice);
    setResult(`Bạn chọn ${playerChoice}, máy tính chọn ${computerChoice}. Kết quả: ${gameResult}`);
    setHistory([...history, `Bạn: ${playerChoice}, Máy tính: ${computerChoice}, Kết quả: ${gameResult}`]);
  };

  return (
    <Card style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <Title level={2}>Trò chơi Oẳn Tù Tì</Title>
      <div style={{ marginBottom: 20 }}>
        {choices.map(choice => (
          <Button key={choice} type="primary" onClick={() => handleClick(choice)} style={{ margin: '0 10px' }}>
            {choice}
          </Button>
        ))}
      </div>
      {result && <Text strong>{result}</Text>}
      <Title level={3} style={{ marginTop: 20 }}>Lịch sử</Title>
      <List
        bordered
        dataSource={history}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Text>{item}</Text>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default OanTuTi;
