"use client";

import React, { FC } from "react";
import { Col, DatePicker, Form, FormInstance, Row, Select } from "antd";

import Button from "@/components/atoms/button";

const { RangePicker } = DatePicker;

interface Props {
  form?: FormInstance;
  fetchFilteredData: (values: FormInstance) => void;
  loading: boolean;
  initialValues?: { [key: string]: string };
  options?: { label: string; value: string }[];
}

/**
 * FilterInput is a functional component that provides a form interface for filtering data.
 * It includes a date range picker and a dataset selector, allowing users to apply filters.
 * The form submission triggers the fetchFilteredData function with the form values.
 *
 * Props:
 * - form: FormInstance - The form instance used to control form state and validation.
 * - fetchFilteredData: (values: FormInstance) => void - A callback function invoked on form submission with current form values.
 * - loading: boolean - A boolean indicating whether the filter button should display a loading state.
 * - initialValues: { [key: string]: string } - An object containing default form values.
 *
 * The component renders a form with a range picker and a select dropdown, and a submit button.
 * The form is rendered with an inline layout, with the range picker and select dropdown placed side-by-side.
 * The submit button is rendered to the right of the select dropdown, and is disabled while the form is loading.
 */
const FilterInput: FC<Props> = ({
  form,
  fetchFilteredData,
  loading,
  initialValues = {
    dataset: "sales",
  },
}) => {
  return (
    <Form
      form={form}
      onFinish={fetchFilteredData}
      layout="inline"
      initialValues={initialValues}
    >
      <Row gutter={[8, 8]}>
        <Col xs={24} md={12}>
          <Form.Item name="dateRange">
            <RangePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Row justify="start" gutter={[0, 0]}>
            <Col flex="auto">
              <Form.Item name="dataset">
                <Select style={{ width: "100%" }}>
                  <Select.Option value="sales">Sales</Select.Option>
                  <Select.Option value="orders">Orders</Select.Option>
                  <Select.Option value="transactions">
                    Transactions
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col flex="auto">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  label="Apply Filters"
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterInput;
